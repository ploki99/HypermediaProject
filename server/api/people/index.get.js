import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {

    const client = serverSupabaseClient(event);

    const { data, error }= await client.from('People').select("id, Name, Surname").eq('id', 1).limit(1).single();
 
    if(error) {
        throw createError({statusCode: error.code, statusMessage: error.message});
    }

    return data;
});
