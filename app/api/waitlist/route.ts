import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email } = await request.json()

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      )
    }

    const response = await fetch('https://api.retool.com/v1/workflows/108fc467-2554-4fce-b8a7-11cf0a762c74/startTrigger', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Workflow-Api-Key': 'retool_wk_9cd281f853a74912ad936dfcb84e55f0'
      },
      body: JSON.stringify({
        data: {
          firstName,
          lastName,
          email
        }
      })
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Retool API error:', errorData)
      throw new Error('Failed to process submission')
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully submitted'
    })

  } catch (error: any) {
    console.error('Submission error:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to submit. Please try again later.'
      },
      { status: 500 }
    )
  }
}