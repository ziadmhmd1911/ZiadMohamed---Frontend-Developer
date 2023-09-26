import { ReactNode } from 'react';

type ModalProps = {
  children: ReactNode | ReactNode[];
  onClickClose?: () => void;
  showOnlyChild?: boolean;
};
export const Modal = ({
  children,
  onClickClose,
  showOnlyChild,
}: ModalProps) => {
  return (
    <div className="fixed top-0 left-0 h-full w-full  bg-[rgba(0,0,0,0.3)] ">
      <div className="flex h-full flex-col items-center justify-center">
        {!showOnlyChild ? (
          <div className="w-[80%] overflow-hidden rounded-md bg-white">
            <div className="flex flex-row items-center justify-end">
              <div
                onClick={onClickClose}
                className="mx-3 my-2 h-7 w-7 cursor-pointer rounded-full text-center text-lg font-semibold hover:bg-red-700 hover:text-white"
              >
                X
              </div>
            </div>
            <div className="w-full p-1">{children}</div>
          </div>
        ) : (
          <>{children}</>
        )}
      </div>
    </div>
  );
};
