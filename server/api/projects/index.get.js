import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {
    const client = serverSupabaseClient(event);

    const { data, error }= await client.from('projects').select("id, name, picture, areas(id, name) ");
    
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message});
    }
    return data;
})
