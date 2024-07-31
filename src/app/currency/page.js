import { Slider } from "@radix-ui/react-slider";
export default function Currency() {
  return (
    <div className="w-full h-screen justify-center flex mt-8">
      <div className="w-[384px] h-[616px] border bg-blue-400">
        <div className="flex gap-3 justify-center ">
          <img className="w-[28px] h-[28px]" src="Vector.jpg" />
          <h1 className="text-3xl">Geld</h1>
        </div>
        <div className="justify-center flex mt-4">
          <div className="w-[240px] h-[48px] border ">
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
}
