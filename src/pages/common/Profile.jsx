import { useState } from 'react';
import swal from 'sweetalert';

const Profile = () => {
  const [input, setInput] = useState({
    iin: 'admin_synaqtest',
    name: 'admin',
    surname: 'admin',
    region: 'Астана',
    institution: 'НУО "Лидер"',
    email: 'admin@mail.com',
    phone: '87085731059',
    balance: '638,50',
    referral: '/register?ref=rZrCTB-U9au1hA',
    bonus: '0,00',
  });

  const handleInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdateData = (e) => {
    e.preventDefault();
    swal('Успех', 'Данные успешно обновлены', 'success');
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    swal('Изменить пароль', 'Функция изменения пароля', 'info');
  };

  const handleUpdateBalance = (e) => {
    e.preventDefault();
    swal('Обновить баланс', 'Функция обновления баланса', 'info');
  };

  const handleAddFunds = (e) => {
    e.preventDefault();
    swal('Пополнить баланс', 'Функция пополнения баланса', 'info');
  };

  return (
    <div className="container mx-auto p-6">
      <div className='order-1 block rounded-lg bg-white px-[80px] py-[80px]  md:order-2'>
        <h2 className='font-bold leading-[1.6]'>Профиль</h2>
        <form onSubmit={handleUpdateData} className='flex flex-col gap-y-5'>
          <div className='grid grid-cols-1 gap-6 xl:grid-cols-2'>
            <div className='flex flex-col gap-y-[10px]'>
              <label htmlFor='profile-iin' className='text-lg font-bold leading-[1.6]'>ИИН</label>
              <input
                type='text'
                name='iin'
                value={input.iin}
                onChange={handleInput}
                id='profile-iin'
                className='rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed'
                disabled
              />
            </div>
            <div className='flex flex-col gap-y-[10px]'>
              <label htmlFor='profile-name' className='text-lg font-bold leading-[1.6]'>Имя</label>
              <input
                type='text'
                name='name'
                value={input.name}
                onChange={handleInput}
                id='profile-name'
                className='rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed'
              />
            </div>
            <div className='flex flex-col gap-y-[10px]'>
              <label htmlFor='profile-surname' className='text-lg font-bold leading-[1.6]'>Фамилия</label>
              <input
                type='text'
                name='surname'
                value={input.surname}
                onChange={handleInput}
                id='profile-surname'
                className='rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed'
              />
            </div>
            <div className='flex flex-col gap-y-[10px]'>
              <label htmlFor='profile-region' className='text-lg font-bold leading-[1.6]'>Регион</label>
              <input
                type='text'
                name='region'
                value={input.region}
                onChange={handleInput}
                id='profile-region'
                className='rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed'
              />
            </div>
            <div className='flex flex-col gap-y-[10px]'>
              <label htmlFor='profile-institution' className='text-lg font-bold leading-[1.6]'>Образовательное учреждение</label>
              <input
                type='text'
                name='institution'
                value={input.institution}
                onChange={handleInput}
                id='profile-institution'
                className='rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed'
              />
            </div>
            <div className='flex flex-col gap-y-[10px]'>
              <label htmlFor='profile-email' className='text-lg font-bold leading-[1.6]'>Электронный адрес</label>
              <input
                type='email'
                name='email'
                value={input.email}
                onChange={handleInput}
                id='profile-email'
                className='rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed'
              />
            </div>
            <div className='flex flex-col gap-y-[10px]'>
              <label htmlFor='profile-phone' className='text-lg font-bold leading-[1.6]'>Контактный телефон</label>
              <input
                type='tel'
                name='phone'
                value={input.phone}
                onChange={handleInput}
                id='profile-phone'
                className='rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed'
              />
            </div>
            <div className='flex flex-col gap-y-[10px]'>
              <label htmlFor='profile-balance' className='text-lg font-bold leading-[1.6]'>Баланс</label>
              <input
                type='text'
                name='balance'
                value={input.balance}
                onChange={handleInput}
                id='profile-balance'
                className='rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed'
                disabled
              />
            </div>
            <div className='flex flex-col gap-y-[10px]'>
              <label htmlFor='profile-referral' className='text-lg font-bold leading-[1.6]'>Реферальная ссылка</label>
              <input
                type='text'
                name='referral'
                value={input.referral}
                onChange={handleInput}
                id='profile-referral'
                className='rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed'
                disabled
              />
            </div>
            <div className='flex flex-col gap-y-[10px]'>
              <label htmlFor='profile-bonus' className='text-lg font-bold leading-[1.6]'>Бонусы</label>
              <input
                type='text'
                name='bonus'
                value={input.bonus}
                onChange={handleInput}
                id='profile-bonus'
                className='rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed'
                disabled
              />
            </div>
          </div>
          <div className='flex flex-wrap gap-2 mt-5'>
            <button
              type='submit'
              className='button flex-1 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white'
            >
              Обновить данные
            </button>
            <button
              onClick={handleChangePassword}
              className='button flex-1 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white'
            >
              Изменить пароль
            </button>
            <button
              onClick={handleUpdateBalance}
              className='button flex-1 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white'
            >
              Обновить баланс
            </button>
            <button
              onClick={handleAddFunds}
              className='button flex-1 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white'
            >
              Пополнить баланс
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
