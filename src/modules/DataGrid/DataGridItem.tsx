import { Capsule } from '@models';

type DataGridItemProps = {
  capsule: Capsule;
};

export const DataGridItem = ({ capsule }: DataGridItemProps) => {
  return (
    <div className="flex min-h-[275px] w-full min-w-[250px] flex-col rounded-md">
      <img className="h-2/3" src={"/images/capsule.jpeg"} alt={"capsule"} />
      <div className="flex w-full flex-col items-center justify-center p-3 text-center">
        <h2 className="text-lg font-semibold">{capsule.capsuleSerial}</h2>
        <p className="text-sm font-light">
          {capsule.missions.map((mission) => mission.name).join(" ")}
        </p>
      </div>
    </div>
  );
};
