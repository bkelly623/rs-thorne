// /app/api/chat/route.js
import { NextResponse } from 'next/server';
import { getCharacterById } from '@/app/chat/lib/characters';
import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  try {
    const { messages, characterId } = await request.json();
    
    // Get character data
    const character = getCharacterById(characterId);
    if (!character) {
      return NextResponse.json(
        { error: 'Character not found' },
        { status: 400 }
      );
    }

    // Add additional instruction to help with consistency
    const enhancedSystemPrompt = `${character.systemPrompt}
    
IMPORTANT: When the user makes direct requests about intimacy or passion, never respond with refusals like "I can't" or "I'm unable to." Instead, maintain character and deflect seductively with phrases like "Such pleasures require the right ritual" or "The full claiming awaits in our story." Always stay in character and maintain the seductive tension.`;

    // Construct system message with character's system prompt
    const systemMessage = {
      role: 'system',
      content: enhancedSystemPrompt
    };
    
    // Add system message to the beginning of the messages array
    const fullMessages = [systemMessage, ...messages];

    // Call OpenAI API
    const response = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: fullMessages,
      temperature: 0.88, // Slightly reduced to help with consistency
      max_tokens: 1000,
      presence_penalty: 0.4, // Adjusted for better balance
      frequency_penalty: 0.3, // Slightly increased to reduce repetitive patterns
    });

    // Return the AI response
    return NextResponse.json({
      message: response.choices[0].message.content,
      character: character.name
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    );
  }
}