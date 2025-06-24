import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface FormSectionProps {
  className?: string;
}

const FormSection: React.FC<FormSectionProps> = ({ className }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a real application, you would handle form submission logic here,
    // likely using a library like react-hook-form.
    console.log('Form submitted');
  };

  return (
    <form onSubmit={handleSubmit} className={cn('w-full', className)}>
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" autoComplete="email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" autoComplete="current-password" required />
          <div className="text-left">
            <Button
              type="button"
              variant="link"
              className="p-0 h-auto text-sm font-normal text-muted-foreground hover:text-primary"
            >
              Forgot Password
            </Button>
          </div>
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
    </form>
  );
};

export default FormSection;
