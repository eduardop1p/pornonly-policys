/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';

import Loading from '../loading';
import MsgError from '@/components/msgError';

import styles from './styles.module.css';

const reportSchema = z.object({
  title: z.string().superRefine((val, ctx) => {
    if (!val.length || !val) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Titulo é obrigatório',
        fatal: true,
      });
      return;
    }
    if (val.length > 100) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Titulo muito longo, tente com menos de 100 caracteres',
      });
    }
  }),
  description: z.string().superRefine((val, ctx) => {
    if (!val.length || !val) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Descrição é obrigatória',
        fatal: true,
      });
      return;
    }
    if (val.length > 1000) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Descrição muito longa, tente com menos de 1000 caracteres',
      });
    }
  }),
  files: z.array(z.optional(z.any())),
});

type ReportType = z.infer<typeof reportSchema>;

export default function ReportBugsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<ReportType>({
    resolver: zodResolver(reportSchema),
  });

  const [files, setFiles] = useState<
    { url: string; fileName: string; fileType: string; file: File }[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setValue(
      'files',
      files.map(val => ({ file: val.file }))
    );
  }, [files, setValue]);

  const hanldeOnSubmit: SubmitHandler<ReportType> = async (body, event) => {
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

        toast.success('Reporte enviado, obrigado pelo seu feedback', {
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
    reset({ description: '', title: '', files: [] });
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
      <form onSubmit={handleSubmit(hanldeOnSubmit)} className="form">
        <div className="container-input">
          <label htmlFor="title">Titulo&nbsp;*</label>
          <input
            type="text"
            id="title"
            maxLength={100}
            placeholder="Um resumo descritivo do problema"
            {...register('title')}
          />
          {errors.title && <MsgError msg={errors.title.message} />}
        </div>
        <div className="container-input">
          <label htmlFor="description">Descrição&nbsp;*</label>
          <textarea
            id="description"
            maxLength={1000}
            placeholder="Uma explicação detalhada do bug, incluindo o que deveria acontecer e o que realmente aconteceu"
            {...register('description', {
              onChange(event) {
                handleChangeTextatera(event);
              },
            })}
          ></textarea>
          {errors.description && <MsgError msg={errors.description.message} />}
        </div>
        <div className={styles['container-files']}>
          <div className={styles['container-upload']}>
            <small>Anexar arquivos</small>
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
