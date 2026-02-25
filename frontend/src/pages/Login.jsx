import { Input, InputGroup } from "@chakra-ui/react";
import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

export function PasswordInput(props) {
  const [show, setShow] = useState(false);

  return (
    <InputGroup
      endElement={
        <span
          onClick={() => setShow(!show)}
          style={{ cursor: "pointer" }}
        >
          {show ? <LuEyeOff /> : <LuEye />}
        </span>
      }
    >
      <Input
        {...props}
        type={show ? "text" : "password"}
      />
    </InputGroup>
  );
}
