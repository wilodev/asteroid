import React from 'react';
import { DefaultLayout } from '@/presentation/components/Layouts/Default';
import { Button } from '@/presentation/components/Button';
import { Link } from 'react-router-dom';
function NotFoundPage() {
  return (
    <DefaultLayout>
      <div className="flex flex-1 justify-center items-center flex-col">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-2xl font-bold mt-4 mb-4">Page not found</p>
        <Button>
          <Link to="/" className="text-white hover:text-white">
            Go to home
          </Link>
        </Button>
      </div>
    </DefaultLayout>
  );
}

export default NotFoundPage;
