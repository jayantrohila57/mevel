import { Icons } from '@/components/common/icons'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

export default function Component() {
  return (
    <Card
      key='1'
      className='w-full max-w-lg'>
      <CardHeader className='border-dark-gray-300 border-b pb-4'>
        <div className='flex items-center'>
          <Icons.cookie className='mr-2' />
          <CardTitle>Cookie Preferences</CardTitle>
        </div>
        <CardDescription>
          Manage your cookie settings. You can enable or disable different types of cookies below.
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-4 pt-4'>
        <div className='flex items-start justify-between space-y-2'>
          <div>
            <Label htmlFor='essential'>Essential Cookies</Label>
            <p className='text-dark-gray-500 text-sm'>
              These cookies are necessary for the website to function and cannot be switched off.
            </p>
          </div>
          <Switch
            className='ml-auto'
            id='essential'
          />
        </div>
        <div className='flex items-start justify-between space-y-2'>
          <div>
            <Label htmlFor='analytics'>Analytics Cookies</Label>
            <p className='text-dark-gray-500 text-sm'>
              These cookies allow us to count visits and traffic sources, so we can measure and improve the performance
              of our site.
            </p>
          </div>
          <Switch
            className='ml-auto'
            id='analytics'
          />
        </div>
        <div className='flex items-start justify-between space-y-2'>
          <div>
            <Label htmlFor='marketing'>Marketing Cookies</Label>
            <p className='text-dark-gray-500 text-sm'>These cookies help us show you relevant ads.</p>
          </div>
          <Switch
            className='ml-auto'
            id='marketing'
          />
        </div>
      </CardContent>
      <div className='border-dark-gray-300 mt-4 border-t' />
      <CardFooter>
        <Button
          className='ml-auto'
          type='submit'>
          Save Preferences
        </Button>
      </CardFooter>
    </Card>
  )
}
