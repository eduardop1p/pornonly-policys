/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import type { ChangeEvent } from 'react';

import Loading from '../loading';
import MsgError from '@/components/msgError';
import FeedbackEmoji from './feedbackEmoji';

import styles from './styles.module.css';

const compImproSchema = z.object({
  name: z
    .optional(z.string())
    .superRefine((val, ctx) => {
      if (val && val.length > 100) {
        ctx.addIssue({
          code: 'custom',
          message: 'Titulo muito longo, tente com menos de 100 caracteres',
          fatal: true,
        });
        return;
      }
    })
    .default(''),
  email: z
    .optional(z.string())
    .superRefine((val, ctx) => {
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (val && !regexEmail.test(val)) {
        ctx.addIssue({
          code: 'custom',
          message: 'Email inválido.',
          fatal: true,
        });
        return;
      }
    })
    .default(''),
  feedbackType: z.string(),
  feedback: z.string().superRefine((val, ctx) => {
    if (!val.length || !val) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Feedback é obrigatório',
        fatal: true,
      });
      return;
    }
    if (val.length > 1000) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Feedback muito longo, tente com menos de 1000 caracteres',
      });
    }
  }),
});

type CompImproType = z.infer<typeof compImproSchema>;

const initialState = {
  active: false,
  value: 'Elogio',
};

export default function ComplimentsImprovementsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<CompImproType>({
    resolver: zodResolver(compImproSchema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showFeedback, setShowFeedback] = useState(initialState);

  const handleOnSubmit: SubmitHandler<CompImproType> = async (body, event) => {
    event?.preventDefault();
    if (isLoading) return;

    /*
      tenho que substituir essa promise abaixo
      para uma chamada a minha api e lá tratar
      esse envio de email para a pornonly@pornonly.xyz
    */
    setIsLoading(true);
    await new Promise((resolve, reject) =>
      setTimeout(() => {
        console.log(body);

        toast.success('Obrigado pelo seu feedback', {
          position: 'top-right',
          autoClose: 4000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          pauseOnFocusLoss: false,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
        resolve(body);
        setIsLoading(false);
        handleResetFields();
      }, 5000)
    );
  };

  useEffect(() => {
    setValue('feedbackType', showFeedback.value);
  }, [setValue, showFeedback]);

  const handleResetFields = () => {
    reset({ email: '', feedback: '', feedbackType: '', name: '' });
    setShowFeedback(initialState);
  };

  const handleChangeTextatera = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const currentTarget = event.currentTarget;
    if (currentTarget.value == '\n') currentTarget.value = ''; // bug das linhas infinitas apertando o enter consertado aqui
    if (!currentTarget.value) return;

    currentTarget.style.height = '5px';
    currentTarget.style.paddingBottom = '1rem';
    currentTarget.style.height = `${currentTarget.scrollHeight}px`;
  };

  return (
    <div className="container-form">
      <ToastContainer />
      <form className="form" onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="container-input">
          <label htmlFor="name">Nome (opcional)</label>
          <input
            type="text"
            id="name"
            maxLength={100}
            placeholder="Seu nome caso desejamos entrar em contato"
            {...register('name')}
          />
          {errors.name && <MsgError msg={errors.name.message} />}
        </div>
        <div className="container-input">
          <label htmlFor="email">Email (opcional)</label>
          <input
            type="text"
            id="email"
            maxLength={100}
            placeholder="Seu email caso desejamos entrar em contato"
            {...register('email')}
          />
          {errors.email && <MsgError msg={errors.email.message} />}
        </div>
        <div className="container-input">
          <small className={styles['title-feedback']}>
            Tipo de feedback&nbsp;*
          </small>
          <div
            className={styles['container-feedback-option']}
            onClick={() =>
              setShowFeedback(state => ({
                ...state,
                active: !state.active,
              }))
            }
            tabIndex={0}
            onBlur={event => {
              if (!event.currentTarget.contains(event.relatedTarget))
                setShowFeedback(state => ({ ...state, active: false }));
            }}
          >
            <span>{showFeedback.value}</span>
            <svg height="10" width="10" viewBox="0 0 24 24">
              <path d="M12 19.5.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z"></path>
            </svg>
            <div
              data-show-feedback={showFeedback.active}
              className={styles['container-feedback']}
            >
              <button
                type="button"
                onClick={() =>
                  setShowFeedback(state => ({
                    ...state,
                    value: 'Elogio',
                  }))
                }
              >
                Elogio
              </button>
              <button
                type="button"
                onClick={() =>
                  setShowFeedback(state => ({
                    ...state,
                    value: 'Melhorias',
                  }))
                }
              >
                Melhorias
              </button>
            </div>
          </div>
        </div>
        <div className="container-input" style={{ marginTop: '-14px' }}>
          <textarea
            id="feedback"
            maxLength={1000}
            placeholder={
              showFeedback.value == 'Elogio'
                ? 'Comentários positivos sobre a sua experiência'
                : 'Sugestões específicas de melhorias'
            }
            {...register('feedback', {
              onChange(event) {
                handleChangeTextatera(event);
              },
            })}
          ></textarea>
          {errors.feedback && <MsgError msg={errors.feedback.message} />}
        </div>
        <div className="container-button">
          <button type="submit">
            Enviar
            {isLoading && <Loading />}
          </button>
        </div>
        {/* <div className={styles['container-feedback-emoji']}>
          <span>O que acha</span>
          <FeedbackEmoji />
        </div> */}
      </form>
    </div>
  );
}
