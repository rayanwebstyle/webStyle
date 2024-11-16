import { notFound } from 'next/navigation'
import {IphoneFetcher} from '@/app/services/reparation/iphone/IphoneFetcher'
import SamsungFetcher from '../samsung/SamsungFetcher'

export default function MobileServicePage({ params }: { params: { type: string } }) {
    if (params.type === 'iphone') {
        return <IphoneFetcher />
    } else if (params.type === 'samsung') {
        return <SamsungFetcher />
    } else {
        notFound()
    }

}
