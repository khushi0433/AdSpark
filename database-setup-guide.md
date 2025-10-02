# Database Setup Instructions

## Supabase Configuration

Your project is configured to use Supabase for backend data persistence. The database connection is already set up in the `.env` file.

## Applying the Migration

To set up the contact form submissions table in your Supabase database, you need to apply the migration file located at:

```
supabase/migrations/20250102000000_create_contact_submissions.sql
```

### Option 1: Using Supabase Dashboard (Recommended)

1. Go to your Supabase Dashboard: https://0ec90b57d6e95fcbda19832f.supabase.co
2. Navigate to the "SQL Editor" section in the left sidebar
3. Click "New Query"
4. Copy and paste the entire content of `supabase/migrations/20250102000000_create_contact_submissions.sql`
5. Click "Run" to execute the migration

### Option 2: Using Supabase CLI (If Available)

If you have the Supabase CLI installed locally, you can run:

```bash
supabase db push
```

## What the Migration Does

The migration creates:

1. **`contact_submissions` table** with the following fields:
   - `id` (uuid) - Unique identifier
   - `name` (text) - Contact's full name
   - `email` (text) - Contact's email
   - `company` (text, optional) - Company name
   - `phone` (text, optional) - Phone number
   - `service` (text, optional) - Service interested in
   - `message` (text) - Contact message
   - `status` (text) - Submission status (new/contacted/closed)
   - `created_at` (timestamptz) - Submission timestamp
   - `updated_at` (timestamptz) - Last update timestamp

2. **Row Level Security (RLS) Policies**:
   - Public users (anonymous) can INSERT contact form submissions
   - Only authenticated users can SELECT and UPDATE submissions
   - This ensures form submissions work publicly while keeping data secure

3. **Database Indexes** for performance optimization

4. **Automatic timestamp updating** via trigger function

## Testing the Contact Form

Once the migration is applied:

1. Navigate to `/contact` page on your website
2. Fill out the contact form
3. Submit the form
4. You should see a success message
5. Check your Supabase dashboard to verify the submission was saved

## Viewing Submissions

To view contact form submissions:

1. Go to Supabase Dashboard
2. Navigate to "Table Editor"
3. Select the `contact_submissions` table
4. You'll see all submissions with their details

## Security Notes

- The form is publicly accessible (anyone can submit)
- Only authenticated users can view submissions
- Consider setting up email notifications for new submissions
- Regularly review and respond to submissions
