import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {
    const id = event.context.params.id;
    
    const client = serverSupabaseClient(event);

    const { data, error }= await client.from('projects')
                        .select("id, name, description, picture , people(id , name), areas(id, name) ")
                        .eq('id', id).limit(1).single();
    
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message});
    }

    return data;
})