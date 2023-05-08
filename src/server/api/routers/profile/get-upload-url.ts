// import { S3 } from "aws-sdk";
// import { env } from "env/server.mjs";
// import { z } from "zod";
// import { protectedProcedure } from "../../trpc";

// const s3 = new S3({
//   apiVersion: "2006-03-01",
//   accessKeyId: env.S3_ACCESS_KEY,
//   secretAccessKey: env.S3_SECRET_KEY,
//   region: env.S3_REGION,
// });

// const schema = z.object({
//   filename: z.string(),
//   type: z.enum(["image/jpeg", "image/png"]),
// });

// export const getUploadUrl = protectedProcedure
//   .input(schema)
//   .mutation(async ({ ctx, input }) => {
//     const finalDot = input.filename.lastIndexOf(".");
//     const extension = input.filename.slice(finalDot + 1);

//     const path = `profile/${ctx.userId}/${Date.now()}.${extension}`;

//     const existingPicturesResult = await s3
//       .listObjectsV2({
//         Bucket: env.S3_BUCKET_NAME,
//         Prefix: `profile/${ctx.userId}/`,
//       })
//       .promise();

//     const existingPictures = existingPicturesResult.Contents;

//     if (existingPictures !== undefined && existingPictures.length > 0) {
//       await s3
//         .deleteObjects({
//           Bucket: env.S3_BUCKET_NAME,
//           Delete: {
//             Objects: [...existingPictures.map((c) => ({ Key: c.Key ?? "" }))],
//           },
//         })
//         .promise();
//     }

//     const presignature = s3.createPresignedPost({
//       Bucket: env.S3_BUCKET_NAME,
//       Fields: {
//         key: path,
//         "Content-Type": input.type,
//       },
//       Expires: 60, // seconds
//       Conditions: [
//         ["content-length-range", 0, 524288], // up to 1 MB
//       ],
//     });

//     await ctx.prisma.user.update({
//       where: { id: ctx.userId },
//       data: {
//         image: `http://static.convention.cards/${path}`,
//       },
//     });

//     return presignature;
//   });

export const sasdfasdf = 1;
