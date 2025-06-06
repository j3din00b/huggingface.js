import { GGMLQuantizationType } from "./types";

export const GGUF_QUANT_DESCRIPTIONS: Record<GGMLQuantizationType, { txt: string; src_url?: string }> = {
	[GGMLQuantizationType.F32]: {
		txt: "32-bit standard IEEE 754 single-precision floating-point number.",
		src_url: "https://en.wikipedia.org/wiki/Single-precision_floating-point_format",
	},
	[GGMLQuantizationType.F16]: {
		txt: "16-bit standard IEEE 754 half-precision floating-point number.",
		src_url: "https://en.wikipedia.org/wiki/Half-precision_floating-point_format",
	},
	[GGMLQuantizationType.Q8_0]: {
		txt: "8-bit round-to-nearest quantization (q). Each block has 32 weights. Weight formula: w = q * block_scale. Legacy quantization method (not used widely as of today).",
		src_url: "https://github.com/huggingface/huggingface.js/pull/615#discussion_r1557654249",
	},
	[GGMLQuantizationType.Q8_1]: {
		txt: "8-bit round-to-nearest quantization (q). Each block has 32 weights. Weight formula: w = q * block_scale + block_minimum. Legacy quantization method (not used widely as of today).",
		src_url: "https://github.com/huggingface/huggingface.js/pull/615#discussion_r1557682290",
	},
	[GGMLQuantizationType.Q8_K]: {
		txt: `8-bit quantization (q). Each block has 256 weights. Only used for quantizing intermediate results. All 2-6 bit dot products are implemented for this quantization type. Weight formula: w = q * block_scale.`,
		src_url: "https://github.com/ggerganov/llama.cpp/pull/1684#issue-1739619305",
	},
	[GGMLQuantizationType.Q6_K]: {
		txt: `6-bit quantization (q). Super-blocks with 16 blocks, each block has 16 weights. Weight formula: w = q * block_scale(8-bit), resulting in 6.5625 bits-per-weight.`,
		src_url: "https://github.com/ggerganov/llama.cpp/pull/1684#issue-1739619305",
	},
	[GGMLQuantizationType.Q5_0]: {
		txt: "5-bit round-to-nearest quantization (q). Each block has 32 weights. Weight formula: w = q * block_scale. Legacy quantization method (not used widely as of today).",
		src_url: "https://github.com/huggingface/huggingface.js/pull/615#discussion_r1557654249",
	},
	[GGMLQuantizationType.Q5_1]: {
		txt: "5-bit round-to-nearest quantization (q). Each block has 32 weights. Weight formula: w = q * block_scale + block_minimum. Legacy quantization method (not used widely as of today).",
		src_url: "https://github.com/huggingface/huggingface.js/pull/615#discussion_r1557682290",
	},
	[GGMLQuantizationType.Q5_K]: {
		txt: `5-bit quantization (q). Super-blocks with 8 blocks, each block has 32 weights. Weight formula: w = q * block_scale(6-bit) + block_min(6-bit), resulting in 5.5 bits-per-weight.`,
		src_url: "https://github.com/ggerganov/llama.cpp/pull/1684#issue-1739619305",
	},
	[GGMLQuantizationType.Q4_0]: {
		txt: "4-bit round-to-nearest quantization (q). Each block has 32 weights. Weight formula: w = q * block_scale. Legacy quantization method (not used widely as of today).",
		src_url: "https://github.com/huggingface/huggingface.js/pull/615#discussion_r1557654249",
	},
	[GGMLQuantizationType.Q4_1]: {
		txt: "4-bit round-to-nearest quantization (q). Each block has 32 weights. Weight formula: w = q * block_scale + block_minimum. Legacy quantization method (not used widely as of today).",
		src_url: "https://github.com/huggingface/huggingface.js/pull/615#discussion_r1557682290",
	},
	[GGMLQuantizationType.Q4_K]: {
		txt: `4-bit quantization (q). Super-blocks with 8 blocks, each block has 32 weights. Weight formula: w = q * block_scale(6-bit) + block_min(6-bit), resulting in 4.5 bits-per-weight.`,
		src_url: "https://github.com/ggerganov/llama.cpp/pull/1684#issue-1739619305",
	},
	[GGMLQuantizationType.Q3_K]: {
		txt: `3-bit quantization (q). Super-blocks with 16 blocks, each block has 16 weights. Weight formula: w = q * block_scale(6-bit), resulting. 3.4375 bits-per-weight.`,
		src_url: "https://github.com/ggerganov/llama.cpp/pull/1684#issue-1739619305",
	},
	[GGMLQuantizationType.Q2_K]: {
		txt: `2-bit quantization (q). Super-blocks with 16 blocks, each block has 16 weight. Weight formula: w = q * block_scale(4-bit) + block_min(4-bit), resulting in 2.625 bits-per-weight.`,
		src_url: "https://github.com/ggerganov/llama.cpp/pull/1684#issue-1739619305",
	},
	[GGMLQuantizationType.IQ4_XS]: {
		txt: "4-bit quantization (q). Super-blocks with 256 weights. Weight w is obtained using super_block_scale & importance matrix, resulting in 4.25 bits-per-weight.",
		src_url:
			"https://huggingface.co/CISCai/OpenCodeInterpreter-DS-6.7B-SOTA-GGUF/blob/main/README.md?code=true#L59-L70",
	},
	[GGMLQuantizationType.IQ3_S]: {
		txt: "3-bit quantization (q). Super-blocks with 256 weights. Weight w is obtained using super_block_scale & importance matrix, resulting in 3.44 bits-per-weight.",
		src_url:
			"https://huggingface.co/CISCai/OpenCodeInterpreter-DS-6.7B-SOTA-GGUF/blob/main/README.md?code=true#L59-L70",
	},
	[GGMLQuantizationType.IQ3_XXS]: {
		txt: "3-bit quantization (q). Super-blocks with 256 weights. Weight w is obtained using super_block_scale & importance matrix, resulting in 3.06 bits-per-weight.",
		src_url:
			"https://huggingface.co/CISCai/OpenCodeInterpreter-DS-6.7B-SOTA-GGUF/blob/main/README.md?code=true#L59-L70",
	},
	[GGMLQuantizationType.IQ2_S]: {
		txt: "2-bit quantization (q). Super-blocks with 256 weights. Weight w is obtained using super_block_scale & importance matrix, resulting in 2.5 bits-per-weight.",
		src_url:
			"https://huggingface.co/CISCai/OpenCodeInterpreter-DS-6.7B-SOTA-GGUF/blob/main/README.md?code=true#L59-L70",
	},
	[GGMLQuantizationType.IQ2_XS]: {
		txt: "2-bit quantization (q). Super-blocks with 256 weights. Weight w is obtained using super_block_scale & importance matrix, resulting in 2.31 bits-per-weight.",
		src_url:
			"https://huggingface.co/CISCai/OpenCodeInterpreter-DS-6.7B-SOTA-GGUF/blob/main/README.md?code=true#L59-L70",
	},
	[GGMLQuantizationType.IQ2_XXS]: {
		txt: "2-bit quantization (q). Super-blocks with 256 weights. Weight w is obtained using super_block_scale & importance matrix, resulting in 2.06 bits-per-weight.",
		src_url:
			"https://huggingface.co/CISCai/OpenCodeInterpreter-DS-6.7B-SOTA-GGUF/blob/main/README.md?code=true#L59-L70",
	},
	[GGMLQuantizationType.IQ1_S]: {
		txt: "1-bit quantization (q). Super-blocks with 256 weights. Weight w is obtained using super_block_scale & importance matrix, resulting in 1.56 bits-per-weight.",
		src_url:
			"https://huggingface.co/CISCai/OpenCodeInterpreter-DS-6.7B-SOTA-GGUF/blob/main/README.md?code=true#L59-L70",
	},
	[GGMLQuantizationType.IQ4_NL]: {
		txt: "4-bit quantization (q). Super-blocks with 256 weights. Weight w is obtained using super_block_scale & importance matrix.",
		src_url: "https://github.com/ggerganov/llama.cpp/pull/5590",
	},
	[GGMLQuantizationType.I8]: {
		txt: "8-bit fixed-width integer number.",
		src_url: "https://github.com/ggerganov/llama.cpp/pull/6045",
	},
	[GGMLQuantizationType.I16]: {
		txt: "16-bit fixed-width integer number.",
		src_url: "https://github.com/ggerganov/llama.cpp/pull/6045",
	},
	[GGMLQuantizationType.I32]: {
		txt: "32-bit fixed-width integer number.",
		src_url: "https://github.com/ggerganov/llama.cpp/pull/6045",
	},
	[GGMLQuantizationType.I64]: {
		txt: "64-bit fixed-width integer number.",
		src_url: "https://github.com/ggerganov/llama.cpp/pull/6062",
	},
	[GGMLQuantizationType.F64]: {
		txt: "64-bit standard IEEE 754 double-precision floating-point number.",
		src_url: "https://en.wikipedia.org/wiki/Double-precision_floating-point_format",
	},
	[GGMLQuantizationType.IQ1_M]: {
		txt: "1-bit quantization (q). Super-blocks with 256 weights. Weight w is obtained using super_block_scale & importance matrix, resulting in 1.75 bits-per-weight.",
		src_url: "https://github.com/ggerganov/llama.cpp/pull/6302",
	},
	[GGMLQuantizationType.BF16]: {
		txt: "16-bit shortened version of the 32-bit IEEE 754 single-precision floating-point number.",
		src_url: "https://en.wikipedia.org/wiki/Bfloat16_floating-point_format",
	},
	[GGMLQuantizationType.TQ1_0]: {
		txt: "Ternary quantization.",
		src_url: "https://github.com/ggml-org/llama.cpp/pull/8151",
	},
	[GGMLQuantizationType.TQ2_0]: {
		txt: "Ternary quantization.",
		src_url: "https://github.com/ggml-org/llama.cpp/pull/8151",
	},
};

const QK_K = 256;
const calcBPW = (blockSize: number, typeSize: number) => {
	return (typeSize * 8) / blockSize;
};

// copied from https://github.com/ggml-org/llama.cpp/tree/master/gguf-py/gguf/constants.py
// map quantization type to element size in bits per weight (example: Q4_K -> 4.5 bpw)
export const GGML_QUANT_SIZES = {
	[GGMLQuantizationType.F32]: calcBPW(1, 4),
	[GGMLQuantizationType.F16]: calcBPW(1, 2),
	[GGMLQuantizationType.Q4_0]: calcBPW(32, 2 + 16),
	[GGMLQuantizationType.Q4_1]: calcBPW(32, 2 + 2 + 16),
	[GGMLQuantizationType.Q5_0]: calcBPW(32, 2 + 4 + 16),
	[GGMLQuantizationType.Q5_1]: calcBPW(32, 2 + 2 + 4 + 16),
	[GGMLQuantizationType.Q8_0]: calcBPW(32, 2 + 32),
	[GGMLQuantizationType.Q8_1]: calcBPW(32, 4 + 4 + 32),
	[GGMLQuantizationType.Q2_K]: calcBPW(256, 2 + 2 + QK_K / 16 + QK_K / 4),
	[GGMLQuantizationType.Q3_K]: calcBPW(256, 2 + QK_K / 4 + QK_K / 8 + 12),
	[GGMLQuantizationType.Q4_K]: calcBPW(256, 2 + 2 + QK_K / 2 + 12),
	[GGMLQuantizationType.Q5_K]: calcBPW(256, 2 + 2 + QK_K / 2 + QK_K / 8 + 12),
	[GGMLQuantizationType.Q6_K]: calcBPW(256, 2 + QK_K / 2 + QK_K / 4 + QK_K / 16),
	[GGMLQuantizationType.Q8_K]: calcBPW(256, 4 + QK_K + QK_K / 8),
	[GGMLQuantizationType.IQ2_XXS]: calcBPW(256, 2 + QK_K / 4),
	[GGMLQuantizationType.IQ2_XS]: calcBPW(256, 2 + QK_K / 4 + QK_K / 32),
	[GGMLQuantizationType.IQ3_XXS]: calcBPW(256, 2 + QK_K / 4 + QK_K / 8),
	[GGMLQuantizationType.IQ1_S]: calcBPW(256, 2 + QK_K / 8 + QK_K / 16),
	[GGMLQuantizationType.IQ4_NL]: calcBPW(32, 2 + 16),
	[GGMLQuantizationType.IQ3_S]: calcBPW(256, 2 + QK_K / 4 + QK_K / 8 + QK_K / 32 + 4),
	[GGMLQuantizationType.IQ2_S]: calcBPW(256, 2 + QK_K / 4 + QK_K / 16),
	[GGMLQuantizationType.IQ4_XS]: calcBPW(256, 2 + 2 + QK_K / 2 + QK_K / 64),
	[GGMLQuantizationType.I8]: calcBPW(1, 1),
	[GGMLQuantizationType.I16]: calcBPW(1, 2),
	[GGMLQuantizationType.I32]: calcBPW(1, 4),
	[GGMLQuantizationType.I64]: calcBPW(1, 8),
	[GGMLQuantizationType.F64]: calcBPW(1, 8),
	[GGMLQuantizationType.IQ1_M]: calcBPW(256, QK_K / 8 + QK_K / 16 + QK_K / 32),
	[GGMLQuantizationType.BF16]: calcBPW(1, 2),
	[GGMLQuantizationType.TQ1_0]: calcBPW(256, 2 + 4 * 13),
	[GGMLQuantizationType.TQ2_0]: calcBPW(256, 2 + 64),
};
