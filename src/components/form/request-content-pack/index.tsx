/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z, { set } from 'zod';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import type { ChangeEvent } from 'react';
import Image from 'next/image';

import Loading from '../loading';
import MsgError from '@/components/msgError';

import styles from './styles.module.css';

const RequestContentPackSchema = z.object({
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
  packName: z.string().superRefine((val, ctx) => {
    if (!val.length || !val) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Nome pack é obrigatório',
        fatal: true,
      });
      return;
    }
    if (val.length > 1000) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Nome pack muito longo, tente com menos de 1000 caracteres',
      });
    }
  }),
  files: z.array(z.optional(z.any())),
});

type RequestContentPackType = z.infer<typeof RequestContentPackSchema>;

export default function RequestContentPackForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<RequestContentPackType>({
    resolver: zodResolver(RequestContentPackSchema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState<
    { url: string; fileName: string; fileType: string; file: File }[]
  >([]);

  useEffect(() => {
    setValue(
      'files',
      files.map(val => ({ file: val.file }))
    );
  }, [files, setValue]);

  const handleOnSubmit: SubmitHandler<RequestContentPackType> = async (
    body,
    event
  ) => {
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

        toast.success('Pedido feito', {
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

  const handleResetFields = () => {
    reset({ email: '', files: [], name: '', packName: '' });
    setFiles([]);
  };

  const handleChangeTextatera = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const currentTarget = event.currentTarget;
    if (currentTarget.value == '\n') currentTarget.value = ''; // bug das linhas infinitas apertando o enter consertado aqui
    if (!currentTarget.value) return;

    currentTarget.style.height = '5px';
    currentTarget.style.paddingBottom = '1rem';
    currentTarget.style.height = `${currentTarget.scrollHeight}px`;
  };

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const changefiles = Array.from(event.target.files as FileList);
    setFiles([]);

    const newFiles = changefiles
      .map(file => ({
        url: URL.createObjectURL(file),
        fileName: file.name,
        fileType: file.type,
        file: file,
      }))
      .slice(0, 5);

    const sizeFiles = newFiles.reduce((prev, curr) => prev + curr.file.size, 0);
    const maxSizeLimit = 500 * 1024 * 1024;
    if (sizeFiles > maxSizeLimit) {
      toast.error('Limite de tamanho de arquivos atingido, tente novalmente', {
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
      return;
    }
    setFiles(state => [...state, ...newFiles]);
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
          <label htmlFor="pack-name">Nome do pack&nbsp;*</label>
          <textarea
            id="pack-name"
            maxLength={1000}
            placeholder="Uma breve descrição de quem você quer ver na pornonly em relação ao autor do contéudo como seu nome"
            {...register('packName', {
              onChange(event) {
                handleChangeTextatera(event);
              },
            })}
          ></textarea>
          {errors.packName && <MsgError msg={errors.packName.message} />}
        </div>
        <div className={styles['container-files']}>
          <div className={styles['container-upload']}>
            <small>Anexar arquivos que descreva melhor (opcional)</small>
            <label htmlFor="file">
              <span>Clique aqui</span>
              <small>Só é permitido no máximo 5 arquivos com 100MB cada</small>
            </label>
            <input
              type="file"
              id="file"
              {...register('files', {
                onChange(event) {
                  handleChangeFile(event);
                },
                setValueAs() {
                  return files.map(val => ({ file: val.file }));
                },
              })}
              accept="image/*, video/*"
              multiple={true}
            />
          </div>
          {files.length ? (
            <div className={styles['container-files-upload']}>
              <span>Carregados:</span>
              {files.map((val, index: number) => (
                <div
                  key={index.toString()}
                  className={styles['container-file']}
                >
                  {val.fileType.includes('image') ? (
                    <Image
                      height={40}
                      width={40}
                      src={val.url}
                      alt={val.fileName}
                    />
                  ) : (
                    <video
                      height={40}
                      width={40}
                      controls={false}
                      src={val.url}
                    ></video>
                  )}
                  <span key={index.toString()}>
                    {val.fileName.length > 30
                      ? `${val.fileName.slice(0, 30)}...`
                      : val.fileName}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setFiles(state => {
                        const newState = [...state];
                        newState.splice(index, 1);
                        return newState;
                      })
                    }
                    className={styles['container-btn-remove']}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div className="container-button">
          <button type="submit">
            Enviar
            {isLoading && <Loading />}
          </button>
        </div>
      </form>
    </div>
  );
}
