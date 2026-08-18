import { Head, Link, usePage } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Megaphone } from 'lucide-react';


interface PageProps{
    flash:{
        message?: string;
    }; [key: string]: any; // Allows other standard Inertia props like auth
}

export default function Index() {

    const { flash } = usePage<PageProps>().props;

    return (
        <>
            <Head title="Products" />
            <div className="m-4">
                <Link href='/products/create'><Button>Create a Product</Button></Link>
            </div>
            <div className='m-4'>
                {flash.message && (
                    <Alert>
                        <Megaphone className="h-4 w-4" />
                        <AlertTitle>Notification!</AlertTitle>
                        <AlertDescription>
                            {flash.message}
                        </AlertDescription>
                    </Alert>
                )}
            </div>
        </>
    );
}

Index.layout = {
    breadcrumbs: [
        {
            title: 'Products',
            href: '/products',
        },
    ],
};
