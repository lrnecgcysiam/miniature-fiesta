import { supabase } from "../utils/supabase";

const LessonDetails = ({ lessons }) => {
  // console.log({ lessons });
  return (
    <div className="w-full max-w-3x mx-auto py-16 px-8">
      <h1 className="text-3xl mb-6">{lessons.titles}</h1>
      <p>{lessons.description}</p>
    </div>
  );
}; 

export const getStaticPaths = async () => {
  const { data: lessons } = await supabase.from("lessons").select("id");

  const paths = lessons.map(({ id }) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};


export const getStaticProps = async ({ params: { id } }) => {
    const { data: lessons } = await supabase
    .from("lessons")
    .select("*")
    .eq("id", id)
    .single();
  
    return {
      props: {
        lessons,
      },
    };
  };
  

export default LessonDetails;

