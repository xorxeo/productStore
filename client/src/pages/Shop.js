import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import { CategoryCards } from '../components/CategoryCards';

export const Shop = () => {
  
  return (
    <div className='container-store flex h-screen min-w-full pt-16 pb-4 mx-0 bg-slate-200'>
        <CategoryCards />
    </div>
  )
};
