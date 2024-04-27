import React from "react"
import * as z from "zod"
import { useParams, useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { verifyEmailSchema } from "@/schemas/verifyEmailSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


const VerifyEmail = () => {

  const router = useRouter();
  const params = useParams<{username:string}>()
  const { toast } = useToast();

  const form = useForm<z.infer<typeof verifyEmailSchema>>({
    resolver: zodResolver(verifyEmailSchema)
  })

  const submit = async (data: z.infer<typeof verifyEmailSchema>) => {
    // try {
    //   const res = await axios.post
    // } catch (error) {
      
    // }
    console.log("submit");
  }

  return (
    <div className='font-cabinet flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md'>
        <div className="text-center">
          <h1 className="font-featureDeck text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
            Verify Your Account
          </h1>
          <p className="mb-4">
            Enter the verfication code sent to your email
          </p>
        </div>
          <Form {...form}>
          <form onSubmit={form.handleSubmit(submit)} className="space-y-6">
            <FormField
              name="code"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Verification Code</FormLabel>
                  <FormControl>
                    <Input placeholder="code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default VerifyEmail