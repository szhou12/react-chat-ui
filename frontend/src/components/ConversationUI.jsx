import { MessageSquare } from "lucide-react"
import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
} from "@chakra-ui/react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"

import { Heading } from "./heading"

const ConversationUI = () => {
    const queryClient = useQueryClient()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        mode: "onBlur",
        criteriaMode: "all",
        defaultValues: {
            message: "",
        },
    })

    const mutation = useMutation({})

    const onSubmit = (data) => {
        mutation.mutate(data)
        console.log(data)
    }

    return (
        <div>
            <Heading
                title="AI Assistant"
                description="Hi! Ask me anything about clean energies"
                icon={MessageSquare}
                iconColor="text-violet-500"
                bgColor="bg-violet-500/10"
            />
            <div className="px-4 lg:px-8">
                <div>
                    <FormControl isInvalid={!!errors.message}>
                        <FormLabel>Message</FormLabel>
                        <Input
                            id="message"
                            type="text"
                            placeholder="Enter your message here..."
                            {...register("message")}
                        />
                        <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
                    </FormControl>
                    <Button type="submit" isLoading={isSubmitting}>Send</Button>
                </div>

            </div>
        </div>
    )
}

export default ConversationUI