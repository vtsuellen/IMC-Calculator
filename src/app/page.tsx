'use client';
import Image from 'next/image';
import ilustration from '../images/ilustration.svg';
import weightimg from '../images/weight-hanging-solid.svg';
import ruler from '../images/ruler-solid.svg';
import link from '../images/arrow-up-right-from-square-solid.svg';
import React from 'react';
import imcCalculator from '@/components/imcCalculator';

export default function Home() {
  const [height, setHeight] = React.useState<number>(0);
  const [weight, setWeight] = React.useState<number>(0);
  const [value, setValue] = React.useState<number>(0);
  const [description, setDescription] = React.useState<string>('');
  const [color, setColor] = React.useState<string>('');
  const [showDescription, setShowDescription] = React.useState(false);

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-gray-900 text-[#f8fafc]'>
      <section className='hidden md:block mx-10 w-full max-w-lg'>
        <Image src={ilustration} alt='images ilustrativa' className='h-96' />
      </section>

      <section className='flex-col items-center justify-center bg-gray-700 p-10 rounded-md mx-10 w-full max-w-xs'>
        <form
          id='form'
          onSubmit={(event) =>
            imcCalculator(
              event,
              weight,
              height,
              setValue,
              setDescription,
              setColor
            )
          }
        >
          <h1 className='text-3xl font-semibold'>Calculadora - IMC</h1>
          <div className='border w-2/6 border-[#00bfa6]'></div>

          <div className='my-5'>
            <label htmlFor='weight' className='font-semibold '>
              Peso em kg
            </label>
            <div className='input-field flex items-center justify-between bg-gray-600 p-2 rounded-md'>
              <Image src={weightimg} className='h-5 w-5' alt='peso' />
              <input
                type='number'
                id='weight'
                name='weight'
                required
                className='bg-transparent w-full text-lg outline-none shadow-none border-none px-5'
                onChange={(e) => {
                  setWeight(Number(e.target.value));
                }}
              />
              <span className='text-gray-300'>Kg</span>
            </div>
          </div>

          <div className='input-box'>
            <label htmlFor='height' className='font-semibold '>
              Altura em metros
            </label>
            <div className='input-field flex items-center justify-between bg-gray-600 p-2 rounded-md'>
              <Image src={ruler} alt='regua' className='h-5 w-5' />
              <input
                type='number'
                step='0.01'
                id='height'
                name='height'
                required
                className='bg-transparent w-full text-lg outline-none shadow-none border-none px-5 appearance-none'
                onChange={(e) => {
                  setHeight(Number(e.target.value));
                }}
              />
              <span className='text-gray-300'>m</span>
            </div>
          </div>

          <button
            className='bg-[#00BFA6] font-semibold text-lg  h-full w-full rounded-md my-8 p-2'
            onClick={() => setShowDescription(true)}
            disabled={!(weight > 0 && height > 0)}
          >
            Calcular
          </button>
        </form>
        {showDescription && (
          <div id='infos' className=''>
            <div className='border h-1/2 border-slate-400/[.33]'></div>
            <div id='result' className='flex flex-row gap-5 items-center'>
              <div className='text-center'>
                <span id='value' className='text-[#00bfa6] text-3xl block mb-2'>
                  {value}
                </span>
                <span className='text-sm block'>Seu IMC:</span>
              </div>
              <span className={`block w-full text-center ${color}`}>
                {description}
              </span>
            </div>
            <div className='border h-1/2 border-slate-400/[.33]'></div>
            <div id='more_info' className='flex'>
              <a
                href='https://mundoeducacao.uol.com.br/saude-bem-estar/imc.htm'
                className='text-[#00bfa6] w-full flex items-center'
              >
                Mais informações sobre o IMC
                <Image src={link} alt='link' className='h-5 w-4 inline ml-4' />
              </a>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
