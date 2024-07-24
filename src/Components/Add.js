import { CiSquareRemove } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { Input } from "@/Components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export const Add = () => {
  return (
    <div className="w-[792px] h-[512px] border bg-white rounded-xl flex-row">
      <div className="w-[750px] h-[512px] ml-4 mt-5">
        <div className="w-full h-[50px] justify-between flex ">
          <h1>Add Record</h1>
          <CiSquareRemove />
        </div>
        <div className="flex">
          <div className="w-[396px] h-[444px]">
            <div className="w-[348px] h-[40px] ">
              <Button
                className="rounded-full w-[172px] h-[40px] hover:bg-blue-500"
                variant="outline"
              >
                Expense
              </Button>
              <Button
                className="rounded-full w-[172px] h-[40px] hover:bg-blue-500"
                variant="outline"
              >
                Income
              </Button>
            </div>
            <div>
              <Input
                className="w-[348px] h-[76px] mt-5 bg-[#f3f4f6] text-[#9ca3af]"
                type="text"
                placeholder="₮ 000.00"
              />
            </div>
            <div className="mt-4">
              <h1 className="text-[#1f2937]">Category</h1>
            </div>
            <div className="mt-4">
              <Select>
                <SelectTrigger className="w-[348px] h-[48px] border bg-[#f3f4f6] text-[#9ca3af]">
                  <SelectValue placeholder="Choose" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mt-4 flex gap-3">
              <div>
                <h1>Date</h1>
                <Select>
                  <SelectTrigger className="w-[170px] h-[48px] border bg-[#f3f4f6] mt-3">
                    <SelectValue placeholder="Oct,30,2023" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <h1>Date</h1>
                <Select>
                  <SelectTrigger className="w-[170px] h-[48px] border bg-[#f3f4f6] mt-3">
                    <SelectValue placeholder="4: 1 5 PM" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="w-[348px] h-[40px] bg-blue-500 mt-9 text-white rounded-full text-center">
              <button className="mt-2"> Add Record</button>
            </div>
          </div>
          <div className="w-[396px] h-[444px]">
            <h1>Payee</h1>
            <div>
              <Select>
                <SelectTrigger className="w-[348px] h-[48px] border bg-[#f3f4f6] mt-3 text-[#94a3b8]">
                  <SelectValue placeholder="Write here" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <h1 className="mt-5">Note</h1>
            <div className="">
              <Input
                className="w-[348px] h-[280px] mt-5 bg-[#f3f4f6] text-[#9ca3af] flex items-start"
                type="text"
                placeholder="Write here"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
