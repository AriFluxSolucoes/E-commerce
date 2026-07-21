type Props={
title:string
subtitle:string
}

export default function SectionTitle({title,subtitle}:Props){

return(

<div className="mb-14">

<p className="text-sm uppercase tracking-widest text-blue-600">
{subtitle}
</p>

<h2 className="mt-2 text-4xl font-bold">
{title}
</h2>

</div>

)

}