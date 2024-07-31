import { Link } from 'react-router-dom';
import useTabs from '../../../hooks/useTabs';

const Pricing = () => {
  const [activeTab, handleTab] = useTabs();
  return (
    <>
      {/*...::: Pricing Section Start :::... */}
      <section className='pricing-section'>
        {/* Section Spacer */}
        <div className='pb-20 xl:pb-[150px] '>
          {/* Section Container */}
          <div className='global-container'>
            {/* Section Content Block */}
            <div className='jos mb-10 text-center lg:mb-12'>
              <div className='mx-auto md:max-w-xs lg:max-w-xl xl:max-w-[746px]'>
                <h2>Какие решения мы предоставляем</h2>
              </div>
            </div>
            {/* Section Content Block */}
            {/* Pricing Block */}
            <div className='container mx-auto'>
              {/* Tab buttons */}
              <div
                className='jos flex justify-center'
                data-jos_animation='fade'
              >
                <div className='inline-flex space-x-4 rounded-[50px] border-2 border-black font-semibold'>
                  <button
                    className={`tab-button price-button ${
                      activeTab === 0 ? 'active' : ''
                    }`}
                    onClick={() => handleTab(0)}
                    data-tab='monthly'
                  >
                    Для школьников
                  </button>
                  <button
                    className={`tab-button price-button ${
                      activeTab === 1 ? 'active' : ''
                    }`}
                    onClick={() => handleTab(1)}
                    data-tab='annually'
                  >
                    Для учителей
                  </button>
                </div>
              </div>

              {/* Pricing Block */}
              <div className='mt-12 lg:mt-16 xl:mt-20'>
                {/* Price List */}
                {activeTab === 0 && (
                  <ul
                    id='monthly'
                    className='tab-content grid grid-cols-1 gap-6 md:grid-cols-2 xxl:grid-cols-3'
                  >
                    {/* Price Item */}
                    <li
                      className='jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear hover:bg-black'
                      data-jos_animation='flip'
                      data-jos_delay='0'
                    >
                      <h3 className='font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white'>
                        ОЗП
                      </h3>

                      <div className='my-5 h-[1px] w-full bg-[#DBD6CF]'></div>
                      <h4 className='mb-4 font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]'>
                      100₸
                        <span className='text-lg font-semibold'>
                          /один тест
                        </span>
                      </h4>
                      <p className='mb-10 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                        Отлично подходит для тех кто сдает ОЗП
                      </p>
                      <Link
                        to='/pricing'
                        className='button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white'
                      >
                        Оплатить
                      </Link>
                    </li>
                    {/* Price Item */}
                    {/* Price Item */}
                    <li
                      className='jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear hover:bg-black'
                      data-jos_animation='flip'
                      data-jos_delay='0'
                    >
                      <h3 className='font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      Админ срез
                      </h3>
                      

                      <div className='my-5 h-[1px] w-full bg-[#DBD6CF]'></div>
                      <h4 className='mb-4 font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]'>
                      100₸
                        <span className='text-lg font-semibold'>
                        /один тест
                        </span>
                      </h4>
                      <p className='mb-10 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      Отлично подходит для тех кто сдает ОЗП
                      </p>
                      <Link
                        to='/pricing'
                        className='button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white'
                      >
                        Оплатить
                      </Link>
                    </li>
                    {/* Price Item */}
                    {/* Price Item */}
                    <li
                      className='jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear hover:bg-black'
                      data-jos_animation='flip'
                      data-jos_delay='0'
                    >
                      <h3 className='font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      ЕНТ
                      </h3>
                      

                      <div className='my-5 h-[1px] w-full bg-[#DBD6CF]'></div>
                      <h4 className='mb-4 font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]'>
                      100₸
                        <span className='text-lg font-semibold'>
                        /один тест
                        </span>
                      </h4>
                      <p className='mb-10 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      Отлично подходит для тех кто сдает ОЗП
                      </p>
                      <Link
                        to='/pricing'
                        className='button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white'
                      >
                        Оплатить
                      </Link>
                    </li>
                    {/* Price Item */}
                  </ul>
                )}
                {/* Price List */}
                {/* Price List */}
                {activeTab === 1 && (
                  <ul
                    id='annually'
                    className='tab-content grid grid-cols-1 gap-6 md:grid-cols-2 xxl:grid-cols-3'
                  >
                    {/* Price Item */}
                    <li
                      className='jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear hover:bg-black'
                      data-jos_animation='flip'
                      data-jos_delay='0'
                    >
                      <h3 className='font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white'>
                        ОЗП
                      </h3>
                     

                      <div className='my-5 h-[1px] w-full bg-[#DBD6CF]'></div>
                      <h4 className='mb-4 font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]'>
                      100₸
                        <span className='text-lg font-semibold'>/один тест</span>
                      </h4>
                      <p className='mb-10 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      Отлично подходит для тех кто сдает ОЗП
                      </p>
                      <Link
                        to='/pricing'
                        className='button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white'
                      >
                        Оплатить
                      </Link>
                    </li>
                    {/* Price Item */}
                    {/* Price Item */}
                    <li
                      className='jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear hover:bg-black'
                      data-jos_animation='flip'
                      data-jos_delay='0'
                    >
                      <h3 className='font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white'>
                        ОЗП
                      </h3>
                     

                      <div className='my-5 h-[1px] w-full bg-[#DBD6CF]'></div>
                      <h4 className='mb-4 font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]'>
                      100₸
                        <span className='text-lg font-semibold'>/один тест</span>
                      </h4>
                      <p className='mb-10 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      Отлично подходит для тех кто сдает ОЗП
                      </p>
                      <Link
                        to='/pricing'
                        className='button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white'
                      >
                        Оплатить
                      </Link>
                    </li>
                    {/* Price Item */}
                    {/* Price Item */}
                    <li
                      className='jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear hover:bg-black'
                      data-jos_animation='flip'
                      data-jos_delay='0'
                    >
                      <h3 className='font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white'>
                        ОЗП
                      </h3>
                     

                      <div className='my-5 h-[1px] w-full bg-[#DBD6CF]'></div>
                      <h4 className='mb-4 font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]'>
                      100₸
                        <span className='text-lg font-semibold'>/один тест</span>
                      </h4>
                      <p className='mb-10 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      Отлично подходит для тех кто сдает ОЗП
                      </p>
                      <Link
                        to='/pricing'
                        className='button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white'
                      >
                        Оплатить
                      </Link>
                    </li>
                    {/* Price Item */}
                    {/* Price Item */}
                  </ul>
                )}
                {/* Price List */}
              </div>
              {/* Pricing Block */}
            </div>
          </div>
          {/* Section Container */}
        </div>
        {/* Section Spacer */}
      </section>
      {/*...::: Pricing Section End :::... */}
    </>
  );
};

export default Pricing;
