import NavigationItem, {NavItem} from "@/app/ui/NavigationItem";


const navItems: NavItem[]  = [
    {
        title: 'Hello1',
        summary: 'Test1'
    },
    {
        title: 'Hello2',
        summary: 'Test2'
    },
    {
        title: 'Hello3',
        summary: 'Test3'
    },
]


const Navigation = () => {
    return <ul className={'w-[300px]'}>
        {navItems.map((item)=> <NavigationItem key={item.title} navItem={item} />)}
    </ul>
}

export default Navigation;