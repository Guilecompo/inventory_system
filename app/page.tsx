"use client"
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

import Image from 'next/image';

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='h-screen w-full'>
      <div className='h-full flex items-center justify-center'>
        <div className='p-6'>
          <Card className="w-full max-w-[700px] max-h-[800px] md:max-h-[450px] flex flex-col md:flex-row">
            <CardHeader className='w-full md:w-[300px] h-[250px] md:h-[450px] relative bg-muted rounded-t-xl md:rounded-l-xl md:rounded-tr-none'>
              <Image 
                src="/log.jpg" 
                alt="Card image" 
                fill
                style={{ objectFit: 'cover' }}
                className='rounded-t-xl md:rounded-l-xl md:rounded-tr-none'
              />
            </CardHeader>
            <CardContent className='bg-white w-full md:w-[400px] flex flex-col justify-center rounded-b-xl md:rounded-r-xl md:rounded-bl-none'>
              <CardTitle className='mb-6 text-xl md:text-2xl text-center'>Login</CardTitle>
              <Label htmlFor="email" className='text-md'>Email</Label>
              <Input type="email" placeholder="Email" className='w-full mb-2 text-md'/>
              <Label htmlFor="password" className='text-md'>Password</Label>
              <div className="relative">
                <Input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Password" 
                  className='w-full mb-4 text-md pr-10'
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex mt-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
              <Button className="w-full text-md py-2">Login</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
