export interface NavItem {
    title: string,
    summary: string,
}


const NavigationItem = ({navItem}) => {
    return <li className={'w-full h-20 rounded-lg hover:bg-gray-100'}>
        <div className={'size-full p-4 flex flex-col'}>
            <h3 className={'font-semibold'}>{navItem.title}</h3>
            <p className={'text-sm'}>{navItem.title}</p>
        </div>
    </li>
}

export default NavigationItem