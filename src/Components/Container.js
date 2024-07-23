import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { FaEye } from "react-icons/fa";
import { Slider } from "@/components/ui/slider";

export const Container = () => {
  return (
    <div className="w-full h-[1100px] bg-[#f3f4f6]">
      <div className="w-[282px] h-[1080px] border-2">
        <div className="w-[250px] h-[88px] ">
          <h1 className="text-xl">Records</h1>
          <Dialog>
            <DialogTrigger className="bg-blue-500 w-[250px] h-[32px] rounded-full mt-6">
              +Add
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

        <div>
          <Dialog>
            <DialogTrigger className="bg-[#f3f4f6] w-[250px] h-[32px] rounded-full mt-6 border-2">
              Search
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        <div className="w-[109px] h-[144px] mt-3 ml-2 ">
          <h1>Types</h1>
          <div className="mt-6 gap-10">
            <div className="flex-row flex ">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                ></label>
              </div>
              <h1>All</h1>
            </div>
            <div className="flex-row flex">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                ></label>
              </div>
              <h1>Income</h1>
            </div>
            <div className="flex-row flex">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                ></label>
              </div>
              <h1>Expence</h1>
            </div>
          </div>
        </div>
        <div className="w-[250px] h-[520px]  mt-3 ">
          <div className="flex justify-between">
            <h1>Category</h1>
            <h1 className="text-[#CDD0D4]">clear</h1>
          </div>
          <div className="mt-4 gap-4 flex flex-col">
            <div className="flex gap-2">
              <FaEye />
              <h1>Food & Drinks</h1>
            </div>
            <div className="flex gap-2">
              <FaEye />
              <h1>Shopping</h1>
            </div>
            <div className="flex gap-2">
              <FaEye />
              <h1>Housing</h1>
            </div>
            <div className="flex gap-2">
              <FaEye />
              <h1>Transportation</h1>
            </div>
            <div className="flex gap-2">
              <FaEye />
              <h1>Vehicle</h1>
            </div>
            <div className="flex gap-2">
              <FaEye />
              <h1>Life & Entertainment</h1>
            </div>
            <div className="flex gap-2">
              <FaEye />
              <h1>Communication, PC</h1>
            </div>
            <div className="flex gap-2">
              <FaEye />
              <h1>Financial expenses</h1>
            </div>
            <div className="flex gap-2">
              <FaEye />
              <h1>Investments</h1>
            </div>
            <div className="flex gap-2">
              <FaEye />
              <h1>Income</h1>
            </div>
            <div className="flex gap-2">
              <FaEye />
              <h1>Others</h1>
            </div>
            <h1 className="text-xl">+ Add Category</h1>
          </div>
        </div>
        <div className="w-[245px] h-[152px]  mt-5">
          <h1>Amount Range</h1>
          <div className="w-[245px] h-[48px] flex gap-3 mt-2">
            <h1 className="w-[115px] h-[48px] bg-slate-300 rounded-xl border">
              0
            </h1>
            <h1 className="w-[115px] h-[48px] bg-slate-300 rounded-xl border">
              1000
            </h1>
          </div>
        </div>
        <div className="w-[245px] h-[48px] ">
          <Slider defaultValue={[1000]} max={1000} step={1} />
        </div>
      </div>
    </div>
  );
};
