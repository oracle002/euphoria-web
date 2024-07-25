import { connection } from "$lib/prisma/connection";
import { ContestantSchema } from "$lib/zod/types";
import { redirect, type Actions } from "@sveltejs/kit";

export const load = ({locals}) => {
    if(locals.user) {
        throw redirect(302, "/dashboard")
    }
}

export const actions = {
    default: async ({request}) => {

        const data = await request.formData();
        const name = data.get('name');
        const email = data.get('email');
        const phone = data.get('phone');
        const password = data.get('password');
        const college = data.get('college');


        const parsed = ContestantSchema.safeParse({
            name, email, password, phone, college
        });


        if(parsed.success)  {
            
            try {
                const existing = await connection.findParticipantByAttribute({email});
                if(existing) {
                    return {
                        success: false,
                        message: "User already exist"
                    }
                }
                const created = await connection.createParticipant(parsed.data);
            } catch (e) {
                
                return {
                    success: false,
                    error: "Failed to create participant"
                }
            }
            throw redirect(302, "/login")
        }
        return {
            success: false,
            error: parsed.error.format(),
            data: {
                name, email, password, phone
            }
        };
    },
} satisfies Actions;