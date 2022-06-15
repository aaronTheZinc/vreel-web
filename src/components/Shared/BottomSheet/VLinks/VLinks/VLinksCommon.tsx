import React, { useState } from "react";
import Styles from "./VLinks.module.scss";
import clsx from "clsx";
import { useAppDispatch } from "src/redux/store/store";
import {
  getIdActions,
  openEventsModal,
  openVlinksModal,
} from "src/redux/createSlice/bottomSheetSlice";
import VLinksReadModal from "../VLinksReadModal/VLinksReadModal";

type Props = {
  item: any;
  index?: number;
};

const VLinksCommon = ({ item, index }: Props) => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && <VLinksReadModal item={item} open={open} setOpen={setOpen} />}
      <div className={Styles.vLinksContainer__vLinks}>
        <div
          className={clsx(
            Styles.vLinksContainer__vLinks__imgContainer,
            index % 2 === 0 ? Styles.orderFirst : Styles.orderLast
          )}
        >
          <img src={item.thumbnail} alt="vLinks Images" />
        </div>
        <div
          className={clsx(
            Styles.vLinksContainer__vLinks__items,
            index % 2 !== 0 ? Styles.orderFirst : Styles.orderLast
          )}
        >
          <h2 className={Styles.h2}>{item.link_header}</h2>
          {item.time && item.time.length && (
            <p
              style={{
                fontSize: "24px",
                paddingTop: "20px",
              }}
            >
              {item.time}
            </p>
          )}
          <p>{item.link_sub_header}</p>
          <div className={Styles.vLinksContainer__vLinks__items__btn}>
            <button
              className={Styles.vLinksContainer__vLinks__items__btn_readMore}
              onClick={() => {
                setOpen(true);
              }}
            >
              Read More
            </button>
          </div>
          <div className={Styles.vLinksContainer__vLinks__items__btn}>
            <button>Become a Partner</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VLinksCommon;
