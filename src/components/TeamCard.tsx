
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface TeamCardProps {
    name: string;
    role: string; // e.g. "Mobile Dev"
    code: string;
    description: string;
    Icon: LucideIcon;
    delay: number;
}

export const TeamCard = ({ name, role, code, description, Icon, delay }: TeamCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0, 255, 65, 0.2)" }}
            className="bg-[#161b22] border border-gray-800 p-6 rounded-xl relative overflow-hidden group hover:border-[#00ff41] transition-colors"
        >
            <div className="absolute -right-4 -top-4 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity rotate-12">
                <Icon size={120} />
            </div>

            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gray-900 rounded-lg text-[#00ff41] border border-gray-800">
                    <Icon size={24} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white leading-none">{name}</h3>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">{role}</span>
                </div>
            </div>

            <div className="bg-[#0d1117] p-4 rounded-md font-mono text-sm text-[#00ff41] border border-gray-800 mb-4 overflow-x-auto">
                <pre>
                    <code>{code}</code>
                </pre>
            </div>

            <p className="text-gray-400 text-sm border-t border-gray-800 pt-3">
                {description}
            </p>
        </motion.div>
    );
};
