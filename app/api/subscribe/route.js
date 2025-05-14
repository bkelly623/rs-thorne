// app/api/subscribe/route.js
export async function POST(request) {
  try {
    const { email, firstName, readingFrequency, subgenrePreferences } = await request.json();

    // Validate the email
    if (!email || !email.includes('@')) {
      return new Response(
        JSON.stringify({ error: 'Valid email is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Prepare fields data for MailerLite
    let fields = {};
    if (firstName) {
      fields.name = firstName;
    }

    // Add subgenre preferences as a custom field if any are selected
    if (subgenrePreferences && subgenrePreferences.length > 0) {
      fields.monster_preferences = subgenrePreferences.join(', ');
    }
    
    // Add reading frequency if provided
    if (readingFrequency) {
      fields.reading_frequency = readingFrequency;
    }

    // The MailerLite API key from your .env.local file or environment variable
    const apiKey = process.env.MAILERLITE_API_KEY;
    
    // The group ID for "Free Book Readers"
    const groupId = '154306060540184206';

    // Make the API request to MailerLite
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        email: email,
        fields: fields,
        groups: [groupId], 
        // You can add other standard fields like status, ip_address if needed
      }),
    });

    const data = await response.json();

    // If MailerLite API returns an error
    if (!response.ok) {
      console.error('MailerLite API error:', data);
      
      // Check if it's a duplicate subscriber error
      if (response.status === 409) {
        return new Response(
          JSON.stringify({ error: 'You are already subscribed! Please check your email for your free book.' }),
          { status: 409, headers: { 'Content-Type': 'application/json' } }
        );
      }
      
      return new Response(
        JSON.stringify({ error: 'Failed to subscribe. Please try again.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Return success response
    return new Response(
      JSON.stringify({ success: true, message: 'Successfully subscribed!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
    
  } catch (error) {
    console.error('Error processing subscription:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}