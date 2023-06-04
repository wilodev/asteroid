import React from 'react';
import { Input } from '../Input';
import { InputType } from '../Input/type';
import { Button } from '../Button';
import { TypeButton } from '../Button/type';
import useAsteroidSearch from '@/presentation/hooks/useHome';

function Hero() {
  const { handleSubmit } = useAsteroidSearch();
  return (
    <section className="bg-gray-900 bg-opacity-10">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-100 md:text-5xl lg:text-6xl">
          Find your asteroid
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48 ">
          Application to search for an asteroid by name or date range
        </p>
        <div className="w-full">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-full mx-auto my-6 space-y-4 md:w-1/2">
              <Input
                label={'Search by name'}
                placeholder="Search..."
                id="search"
              />
            </div>
            <div className="flex flex-col w-full mx-auto my-6 space-y-4 md:w-1/2">
              <h2 className="text-lg font-semibold text-white">
                Search by Date Range
              </h2>
            </div>
            <div className="flex flex-row mx-auto my-6 md:w-1/2">
              <div className="flex w-1/2 mr-2">
                <Input
                  label={'Start Date'}
                  type={InputType.DATE}
                  placeholder="AAAA-MM-DD"
                  id="startDate"
                />
              </div>
              <div className="flex w-1/2 ml-2">
                <Input
                  label={'End Date'}
                  type={InputType.DATE}
                  placeholder="AAAA-MM-DD"
                  id="endDate"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Button type={TypeButton.SUBMIT}>
                Get started
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Hero;
