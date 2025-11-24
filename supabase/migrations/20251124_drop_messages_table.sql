/*
  # Remove Messages Table

  1. Changes
    - Drop messages table completely
    - Remove all associated policies and indexes

  2. Reason
    - Direct communication between users and providers is not allowed
    - All interactions happen through structured proposals
    - Maintains platform security and professionalism
    - No free-form chat or messaging system needed

  3. Important Notes
    - This is a destructive operation
    - Make sure to backup any messages if needed before running
    - All communication now happens through the proposal system only
*/

-- Drop policies first
DROP POLICY IF EXISTS "View own messages" ON messages;
DROP POLICY IF EXISTS "Send messages" ON messages;

-- Drop indexes
DROP INDEX IF EXISTS idx_messages_sender_id;
DROP INDEX IF EXISTS idx_messages_receiver_id;
DROP INDEX IF EXISTS idx_messages_service_id;

-- Drop table
DROP TABLE IF EXISTS messages;
