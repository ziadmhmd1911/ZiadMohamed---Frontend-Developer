import Button from 'src/components/Button/Button';

const Banner = () => {
  return (
    <div data-testid="banner" className="min-h-[350px] w-full">
      <img
        className="min-h-[350px] w-full"
        src={"/images/banner_1.webp"}
        alt={"banner"}
      />
      <div className="absolute top-0 left-0 h-full min-h-[350px] w-full">
        <img
          className="absolute h-20 w-20 md:h-24 md:w-24"
          src={"/images/capsule_corp_logo.png"}
          alt={"banner"}
        />
        <div className="mt-20 ml-auto w-[53%] p-3 text-left text-white md:mt-44 lg:mt-56 lg:w-[40%] xl:mt-64">
          <span className="my-2 block text-xl font-bold md:text-5xl">
            Sky is the limit !
          </span>
          <span className="md:text-md my-2 block text-sm font-semibold">
            Welcome to the place of endless possibilities. Our vision and
            mission is to explore the vast universe and uncover the mysteries.
          </span>
          <Button
            buttonType="success"
            className="text-md float-right mr-5 md:text-lg"
          >
            <a href="#filters">Know more</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
