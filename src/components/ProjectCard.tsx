import Image from "next/image";


interface ProjectCardProps {
    name: string;
    description: string;
    Details: string;
    image: string;
    TechStack: string[];
    Link:string;
    category: string;
}

export default function ProjectCard({
      name,
      description,
      image,
      TechStack,  
      Link,  
      category,
      Details,                                                                       
}: ProjectCardProps) {
    return(
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative w-full h-48">
                <Image
                src={image}
                alt={name}
                layout="fill" objectFit="cover" />
            </div>
            <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">
               {name}
                </h3>
                <p className="text-gray-600 m-4"><b className="text-green-500">Description:</b> {description}</p>
                <p className="text-gray-600 m-4"><b className="text-green-500">Details:</b>{Details}</p>
                <p className="text-gray-600 m-4"><b className="text-green-500">Category:</b>{category}</p>
                <div className="flex flex-wrap gap-2">
                    {TechStack.map((tech, index) => (
                        <span key={index}
                        className="bg-gray-200 text:sm font-medium px-2 py-1 rounded-lg"
                        >
                            {tech}

                        </span>
                    ))}
                    <a href={Link}><button className="btn rounded-lg">View Demo</button></a>

                </div>

            </div>

        </div>
    )
}