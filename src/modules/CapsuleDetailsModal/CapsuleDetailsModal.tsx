import { Capsule } from '@models';
import { format } from 'date-fns';
import { Modal } from 'src/components/Modal';

type CapsuleDetailsModalProps = {
  onClose: () => void;
  capsule: Capsule;
};

const CapsuleDetailsModal = ({
  capsule,
  onClose,
}: CapsuleDetailsModalProps) => {
  return (
    <Modal onClickClose={onClose}>
      <div className="flex flex-col-reverse bg-white p-3 sm:flex-row">
        <div className="w-full px-2 sm:w-1/2 lg:px-4">
          <div className="my-1 lg:my-3">
            <b>Serial : </b> {capsule.capsuleSerial ?? "-"}{" "}
          </div>
          <div className="my-1 lg:my-3">
            <b>Capsule-ID : </b> {capsule.capsuleId ?? "-"}{" "}
          </div>
          <div className="my-1 lg:my-3">
            <b>Status : </b> {capsule.status ?? "-"}{" "}
          </div>
          <div className="my-1 lg:my-3">
            <b>Original launch : </b>{" "}
            {format(new Date(capsule.originalLaunch), "do MMM yyyy")}{" "}
          </div>
          <div className="my-1 lg:my-3">
            <b>Missions : </b>{" "}
            {capsule?.missions?.map((mission) => mission.name).join(",") ?? "-"}{" "}
          </div>
        </div>
        <div className="w-full items-center justify-center overflow-hidden rounded-md sm:mx-3 sm:w-1/2">
          <img
            className="mb-4 min-h-[300px] w-full rounded-md"
            src={"/images/capsule.jpeg"}
            alt={"capsule"}
          />
        </div>
      </div>
    </Modal>
  );
};

export default CapsuleDetailsModal;
