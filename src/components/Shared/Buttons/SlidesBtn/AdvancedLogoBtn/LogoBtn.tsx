import React from 'react';
import { useSelector } from 'react-redux';
import FormikControl from 'src/services/formik/FormikControl';
import {
  isDesktopShow,
  showAdvancedLogo,
  showMediaMobileSelector,
} from 'src/redux/createSlice/createMobileMediaSelector';
import { RootState, useAppDispatch } from 'src/redux/store/store';
import Styles from './LogoBtn.module.scss';

type Props = {};

const LogoBtn = (props: Props) => {
  const { getMediaIconsLink } = useSelector(
    (state: RootState) => state.mobileMediaSelector
  );
  const dispatch = useAppDispatch();
  return (
    <div className={Styles.imgContainer}>
      <FormikControl
        control='image'
        name='advanced'
        placeholder='Submit'
        type='image'
      />
      <button
        className={Styles.imgContainer__addLogo}
        onClick={() => {
          dispatch(showMediaMobileSelector());
          dispatch(showAdvancedLogo(true));
          dispatch(isDesktopShow(false));
        }}
      >
        <span>Add Logo</span>
        <img
          className={Styles.img}
          src='/assets/icons/addLogo.svg'
          alt='Add Logo Images'
        />
      </button>
    </div>
  );
};

export default LogoBtn;
