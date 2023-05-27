import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {
    const client = serverSupabaseClient(event);

    const { data, error }= await client.from('projects').select("id, name, picture, large_picture")
                        .order('relevance_index', { ascending: false })
                        .limit(5);
    
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message});
    }
    return data;
})
