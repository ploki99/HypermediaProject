import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {
    const id = event.context.params.id;
    
    const client = serverSupabaseClient(event);

    const { data, error }= await client.from('projects')
                        .select("id, name, picture, overview, large_picture, \
                         startup_name, startup_description, startup_picture, startup_link, description,  \
                         people(id , name, picture), areas(id, name) ")
                        .eq('id', id).limit(1).single();
    
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message});
    }

    return data;
})