// export default async function Page({
//     params,
//   }: {
//     params: Promise<{ slug: string }>
//   }) {
//     const slug = (await params).slug
//     return <div>My Post: {slug}</div>
//   }
export default function Page({params}){
    //fetch your blog post by its slug
    let language=["python","javascript","java","cpp","c#"]
    if(language.includes(params.slug)){
        return <div>My Past: {params.slug}</div>
    }else{
        return <div>Post Not Found</div>
    }
    // return <div>My Post: {params.slug}</div>
}
//accessing url in page