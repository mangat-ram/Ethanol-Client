/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Loader2 } from 'lucide-react';
import { signUpSchema } from "@/schemas/signUpSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import * as z from "zod"
import { useDebounceCallback } from "usehooks-ts";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import axios from "axios";

const SignUp = () => {

  const [username,setUsername] = useState("");
  const [usernameMessage, setUsernameMessage] = useState("");
  const [isCheckingUser,setIsCheckingUser] = useState(false)
  const [isSubmitting,setIsSubmitting] = useState(false)

  const debouncedUsername = useDebounceCallback(setUsername,500);
  const {toast} = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues:{
      userName: "",
      name: "",
      email: "",
      passWord:""
    }
  })

  useEffect(() => {
    const checkUsernameUni = async () => {
      if(username){
        setIsCheckingUser(true)
        setUsernameMessage("")
        try {
          const res = await axios.get(`http://localhost:8000/api/v1/users/checkUniqueUser/${username}`)
          setUsernameMessage(res.data.message);
          // console.log("Response",usernameMessage)
        } catch (error) {
          console.log("Error in catch Part useEffect:", error);
          toast({
            title:"Sign Up Failed",
            description:"Error in catch Part useEffect",
            variant:"destructive"
          })
        } finally {
          setIsCheckingUser(false);
        }
      } else {
        setUsernameMessage("");
      }
    }
    checkUsernameUni(); 
  },[username])

  const submitRegister = async (data: z.infer<typeof signUpSchema>) => {
    setIsSubmitting(true)
    try {
      const res = await axios.post('http://localhost:8000/api/v1/users/register',data);
      toast({
        title:"Success",
        description:res.data.message
      })
    } catch (error) {
      console.log("error in catch of register",error);
      
    }
  }

  return (

          <div className="font-cabinet flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6 font-featureDeck">
              Join Ethanol Now
            </h1>
            <p className="mb-4">
              register yourself
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(submitRegister)} className="space-y-6">
              <FormField
                control={form.control}
                name="userName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="your username here" 
                        {...field}
                        onChange={(e) => {
                          field.onChange(e)
                          debouncedUsername(e.target.value)
                        }}
                      />
                    </FormControl>
                    {isCheckingUser && <Loader2 className="animate-spin" />}
                    <p className={`text-sm font-bold ${usernameMessage === "Username is available." ? 'text-green-500' : 'text-red-600'}`}>{usernameMessage}</p>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="your fullname here" 
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input 
                        type="email"
                        placeholder="your email here" 
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="passWord"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input 
                        type="password"
                        placeholder="password" 
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isSubmitting}>
                {
                    isSubmitting ? (<>
                      <Loader2 
                        className="mr-2 h-4 w-4 animate-spin" 
                      /> Please wait
                    </>) : ("SignUp")
                }
              </Button>
            </form>
          </Form>
        </div>
      </div>
  )
}

export default SignUp