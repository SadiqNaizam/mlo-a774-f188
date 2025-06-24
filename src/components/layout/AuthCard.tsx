import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface AuthCardProps {
  children: React.ReactNode;
  title: string;
  footerText: string;
  footerLinkText: string;
  footerLinkHref: string;
  className?: string;
}

const AuthCard: React.FC<AuthCardProps> = ({
  children,
  title,
  footerText,
  footerLinkText,
  footerLinkHref,
  className,
}) => {
  return (
    <Card className={cn("w-96 shadow-lg", className)}>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter className="flex justify-center text-sm">
        <p className="text-muted-foreground">
          {footerText}{' '}
          <a href={footerLinkHref} className="font-medium text-primary hover:underline">
            {footerLinkText}
          </a>
        </p>
      </CardFooter>
    </Card>
  );
};

export default AuthCard;
