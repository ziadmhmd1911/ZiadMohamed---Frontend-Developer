import { Capsule } from '@models';
import { useCallback, useState } from 'react';

import CapsuleDetailsModal from '../CapsuleDetailsModal/CapsuleDetailsModal';
import { usePaginationContext } from '../Pagination';
import { DataGridItem } from './DataGridItem';

export const DataGrid = () => {
  const { itemsToDisplay: capsules } = usePaginationContext();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedCapsule, setSelectedCapsule] = useState<Capsule>();

  const onClickItem = useCallback((capsule: Capsule) => {
    setSelectedCapsule(capsule);
    setShowModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  return capsules ? (
    <div className="grid h-[640px] grid-cols-2 items-start bg-gray-300 p-[20px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {capsules.map((capsule, index) => {
        return (
          <div
            onClick={() => onClickItem(capsule)}
            className="m-4 flex min-w-[20%] cursor-pointer items-center justify-center overflow-hidden rounded-md bg-white shadow-xl"
            key={`${capsule.capsuleId}_${index}`}
          >
            <DataGridItem capsule={capsule} />
          </div>
        );
      })}
      {showModal && selectedCapsule ? (
        <CapsuleDetailsModal onClose={onCloseModal} capsule={selectedCapsule} />
      ) : null}
    </div>
  ) : (
    <></>
  );
};
