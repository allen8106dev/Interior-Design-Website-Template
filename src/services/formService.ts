export interface ContactFormPayload {
  name: string
  email: string
  phone: string
  projectType: string
  message: string
}

export interface FormSubmitResult {
  ok: boolean
  message: string
}

/**
 * Form submission abstraction.
 * Swap the implementation later for Formspree, EmailJS, Supabase, or a custom API
 * without rewriting the Contact form UI.
 */
export async function submitContactForm(
  payload: ContactFormPayload,
  endpoint?: string,
): Promise<FormSubmitResult> {
  if (endpoint) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        return {
          ok: false,
          message: 'Something went wrong while sending your message. Please try WhatsApp or phone.',
        }
      }

      return {
        ok: true,
        message: 'Thank you. We have received your enquiry and will respond shortly.',
      }
    } catch {
      return {
        ok: false,
        message: 'Unable to reach the form service. Please try again or contact us on WhatsApp.',
      }
    }
  }

  // Demo / local fallback — simulates a successful submission.
  await new Promise((resolve) => setTimeout(resolve, 700))
  console.info('[DEMO FORM] Submission received (not sent to a backend):', payload)
  return {
    ok: true,
    message:
      'Demo mode: your enquiry was captured locally. Connect Formspree, EmailJS, or your API via siteConfig.formEndpoint.',
  }
}
