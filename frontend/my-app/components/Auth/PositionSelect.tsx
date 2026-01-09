import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";

export function PositionSeclect() {
  return (
    <Select>
      <SelectTrigger className="w-104 text-gray-700 h-40 border-gray-300 ">
        <SelectValue placeholder="Select a Position" />
      </SelectTrigger>

      <SelectContent
        position="popper"
        side="bottom"
        align="start"
        sideOffset={4}
        className=" backdrop-blur-md border shadow-lg rounded-md z-50"
      >
        <SelectGroup>
          <SelectLabel>Position</SelectLabel>
          <SelectItem value="UX/UI Design">UX/UI Design</SelectItem>
          <SelectItem value="Frontend Developer">Frontend Developer</SelectItem>
          <SelectItem value="Backend Developer">Backend Developer</SelectItem>
          <SelectItem value="Dev Ops">Dev Ops</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
