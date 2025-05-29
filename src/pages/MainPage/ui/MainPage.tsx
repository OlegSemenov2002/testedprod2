import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';

const MainPage = () =>
const { t } = useTranslation();

    (
        <div className={classNames('', {}, [cls.main_page])}>
            <div className={classNames('', {}, [cls.main_page_conteiner])}>
                {/* <header className={classNames('', {}, [cls.item, cls.main_page_header])}> */}
                {/*    {t('Header')} */}
                {/* </header> */}
                {/* <aside className={classNames('', {}, [cls.item, cls.main_page_aside_left])}> */}
                {/*    {t('Aside')} */}
                {/* </aside> */}
                {/* <main className={classNames('', {}, [cls.item, cls.main_page_main])}> */}
                {/*    {t('Main')} */}
                {/* </main> */}
                {/* <aside className={classNames('', {}, [cls.item, cls.main_page_aside_right])}> */}
                {/*    {t('Aside')} */}
                {/* </aside> */}
                {/* <footer className={classNames('', {}, [cls.item, cls.main_page_footer])}> */}
                {/*    {t('Footer')} */}
                {/* </footer> */}

            </div>
        </div>
    );
export default MainPage;
