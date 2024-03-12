import React from "react";
import { Input } from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

// export const RegisterForm = () => {
//   return (
//     <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
//         <Input size="md" type="text" label="Username" />
//         <Input size="md" type="text" label="Name" />
//         <Input size="md" type="email" label="Email" />
//         <Input size="md" type="password" label="Password" />
//     </div>
//   );
// }


export const RegisterForm = () => {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">Register Yourself</p>
          <p className="text-small text-default-500">ethanol.org</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <Input size="md" type="text" label="Username" />
        <Input size="md" type="text" label="Name" />
        <Input size="md" type="email" label="Email" />
        <Input size="md" type="password" label="Password" />
      </CardBody>
      <Divider/>
      <CardFooter>
        
      </CardFooter>
    </Card>
  );
}




