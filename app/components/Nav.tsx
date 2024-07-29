

type Props = {}

function Nav({ }: Props) {
    return (
        <nav className="flex justify-between bg-nav p-4">
            <div className="flex items-center space-x-10">
                HOME
            </div>
            <div className="text-xl ">
                samim@gmail.com
            </div>
        </nav>
    )
}

export default Nav