export default defineEventHandler(async (event) => {
    
    const body = await readBody(event);

    //only for visual porpuses
    await new Promise(r => setTimeout(r, 1500));

    if (body.name === '' || body.email === '' || body.msg === '')
        throw createError({statusCode: 500, statusMessage: "Internal server error"});

    return true;    
})
